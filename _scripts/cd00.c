/*
Finite state automata construction
A [source code](http://sun.aei.polsl.pl/~sdeor/pub/cd00.c) which accompanies the paper [Ciura M., Deorowicz S., How to squeeze a lexicon](http://sun.aei.polsl.pl/~sdeor/pub/cd00abs.htm). In this paper, we describe a compact way of storing a lexicon using a finite state automata.
SOURCE: http://sun.aei.polsl.pl/~sdeor/pub/cd00.c
        http://sun.aei.polsl.pl/~sdeor/index.php?page=my_software
NOTE: The original file DOES NOT contain these first 7 lines!!!
*/
/*
** A sample program for the paper:
** MG Ciura, S Deorowicz, "How to squeeze a lexicon".
** 2001-05-04 - 2005-10-11
*/

/* History:
   2006-03-01 - a small correction to work better with some compilers
   2005-10-11 - corrected small bug - sometimes non-words, which
       prefixes are correct words were reported as correct
       (thanks to Przemek Drochomirecki for bug report)
   2004-10-03 - corrected small bug for USE_TREE version
       (thanks to Przemek Drochomirecki for bug report)
   2001-09-13 - corrected small bug in automaton creation
   2001-05-04 - first public version
*/

#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define PRINT_STATISTICS
/*#define USE_TREE          /* represent states in complete binary trees */
/*#define USE_INCLUSION     /* enable including states */

#define MAX_STR_LEN         300
#define MAX_CHARS           256
#define HT_SIZE             (1 << 20)
#define HT_ELEM_SIZE        (1 << 10)
#ifndef USE_TREE
#define MAX_AUT_SIZE        (1 << 22)
#else
#define MAX_AUT_SIZE        (1 << 21)
#endif

typedef union {
    unsigned all_fields;
    struct {
#ifdef USE_TREE
        unsigned llast : 1;
        unsigned rlast : 1;
        unsigned dest  : 21;
#else
        unsigned last : 1;
        unsigned dest : 22;
#endif
        unsigned attr : 8;
        unsigned term : 1;
    } b;
#ifdef USE_INCLUSION
    struct {
        unsigned last           : 1;
        unsigned dest_attr_term : 31;
    } d;
#endif
} transition;

typedef int sizeof_unsigned_int_must_match_sizeof_transition
[2*(sizeof(unsigned)==sizeof(transition))-1];

typedef struct tbucket
{
    unsigned addr;
    size_t size;
    struct tbucket *next;
} bucket;

unsigned long n_strings;            /* number of strings */
unsigned long n_chars;              /* number of characters */

bucket *hash_table[HT_SIZE];
bucket *ht_elem[MAX_AUT_SIZE/HT_ELEM_SIZE];
int ht_next_elem, ht_last_pos;

#ifdef USE_INCLUSION
bucket *hash_table_in[HT_SIZE];
bucket *ht_elem_in[MAX_AUT_SIZE/HT_ELEM_SIZE];
int ht_next_elem_in, ht_last_pos_in;
unsigned hash_table_in_count[HT_SIZE];
int frozen_states[MAX_AUT_SIZE];
#endif

transition automat[MAX_AUT_SIZE];   /* the automaton */
unsigned aut_size;                  /* size of the automaton */
unsigned start_state;               /* position of the start state */
transition larval_state[MAX_STR_LEN+1][MAX_CHARS];
size_t l_state_len[MAX_STR_LEN+1];
int is_terminal[MAX_STR_LEN+1];
unsigned char temp_str[MAX_STR_LEN+1];  /* string for listing */
#ifdef USE_TREE
transition temp_state[MAX_CHARS+1];
#endif

FILE *lex_file;                     /* lexicon file */
FILE *aut_file;                     /* automaton file */

#ifdef PRINT_STATISTICS
unsigned n_term_trans;         /* number of terminal transitions */
unsigned n_states;             /* number of states */
unsigned n_trans;              /* number of transitions */
#ifdef USE_INCLUSION
unsigned n_states_in;          /* number of included states */
unsigned n_trans_in;           /* number of included transitions */
#endif
#endif

int check_string(unsigned char *str);
void error(char *msg);
unsigned hash_state(transition *state, unsigned state_len);
#ifdef USE_TREE
void list_strings(unsigned pos, int str_pos, int tree_pos);
#else
void list_strings(unsigned pos, int str_pos);
#endif
void make_automat(void);
unsigned make_state(transition *state, unsigned state_len);
#ifdef USE_TREE
void make_tree(transition *state, int left, int right, unsigned pos, int full);
#endif
#ifdef USE_INCLUSION
unsigned hash_fun_in(unsigned p);
void add_state_in(int first, int last);
int find_subset(transition *state, unsigned state_len);
int reorganize_state(unsigned pos, transition *state, unsigned state_len);
void sort_bucket(bucket *ptr);
bucket *mergesort(bucket *p);
#endif
void prepare_tables(void);
void read_automat(char *aut_name);
int read_string(unsigned char *str);
void save_automat(char *aut_name);
void open_dict(char *fname, char *attr);
void set_io_buffer(FILE *file, size_t size);
void show_stat(double dt);
void test_automat(void);

/*
** Print an error message and terminate the program.
*/
void error(char *message)
{
    fprintf(stderr, "%s\n", message);
    exit(EXIT_FAILURE);
}
/*
** Prepare data structures before program run.
*/
void prepare_tables(void)
{
    int i;

    for (i = HT_SIZE-1; i >= 0; i--) {
        hash_table[i] = NULL;
#ifdef USE_INCLUSION
        hash_table_in[i]       = NULL;
        hash_table_in_count[i] = 0;
#endif
    }

    for (i = MAX_AUT_SIZE / HT_ELEM_SIZE - 1; i >= 0; i--)
        ht_elem[i] = NULL;
    ht_last_pos  = -1;
    ht_next_elem = HT_ELEM_SIZE;
#ifdef USE_INCLUSION
    for (i = MAX_AUT_SIZE / HT_ELEM_SIZE - 1; i >= 0; i--)
        ht_elem_in[i] = NULL;
    ht_last_pos_in  = -1;
    ht_next_elem_in = HT_ELEM_SIZE;
#endif

    aut_size = 0;
    for (i = 0; i < MAX_STR_LEN+1; i++)
        l_state_len[i] = 0;
}

/*
** Set buffer for io stream.
*/
void set_io_buffer(FILE *file, size_t size)
{
    if (setvbuf(file, NULL, _IOFBF, size) != 0)
        error("Cannot set input buffer.");
}

/*
** Read next string from input file and return its length.
*/
int read_string(unsigned char *str)
{
    int c, i;

    for (i = 0; (c = getc(lex_file)) != '\n'; str[i++] = (unsigned char)c) {
        if (c == EOF)
            return 0;
        if (i > MAX_STR_LEN)
            error("Lexicon string too long.");
    }
    str[i] = '\0';
    n_strings++;
    n_chars += i + 1;

    return i;
}
/*
** Hash function for states.
*/
unsigned hash_state(transition *state, unsigned state_len)
{
    unsigned r = 0;
    int i;

    for (i = state_len-1; i >= 0; i--)
        r += state[i].all_fields;

    return ((r * 324027) >> 13) % HT_SIZE;
}

#ifdef USE_TREE
/*
** Make a tree-shaped state from a larval state.
*/
void make_tree(transition *state, int left, int right, unsigned pos, int full)
{
    int size, sel, rest;

    size = right - left + 1;

    if (full == -1) {
        /* first time count of elements in full part of the tree (full) */
        full = 0;
        while (2*full + 1 < size)
            full = 2*full + 1;
    }

    sel  = left + full / 2;     /* sel - number of root element */
    rest = size - full;         /* number of elements in last row */
    if (rest > (full + 1) / 2)  /* are elts in last row right > root */
        sel += (full + 1) / 2;  /* add only `left' elements */
    else
        sel += rest;            /* add all elements in last row */

    /* put transition to root of current subtree */
    temp_state[pos] = state[sel];

    /* recursively create rest of the tree */
    if (left > sel - 1)
        temp_state[pos].b.llast = 1;   /* there are no `left' elements */
    else
        make_tree(state, left, sel - 1, pos + pos + 1, full / 2);

    if (sel + 1 > right)
        temp_state[pos].b.rlast = 1;  /* there are no `right' elements */
    else
        make_tree(state, sel + 1, right, pos + pos + 2, full / 2);
}
#endif
/*
** Seek an identical state in the automaton
** or create a new state. Return its index.
*/
unsigned make_state(transition *state, unsigned state_len)
{
    bucket *ptr;
    int i;
    unsigned pos;
    unsigned hash_addr;
#ifdef USE_INCLUSION
    int pos_in;
#endif

    /* make zero state */
    if (state_len == 0)
        state[state_len++].all_fields = 0;

#ifdef USE_TREE
    make_tree(state, 0, state_len-1, 0, -1);
#else
    state[state_len-1].b.last = 1;
#endif

    /* check if an identical state is in automat */
    hash_addr = hash_state(state, state_len);
    for (ptr = hash_table[hash_addr]; ptr; ptr = ptr->next) {
        if(ptr->size == state_len) {
            for (i = state_len-1; i >= 0; i--)
#if defined USE_TREE
                if (automat[ptr->addr+i].all_fields != temp_state[i].all_fields)
                    break;
#elif defined USE_INCLUSION
            {
                /* edges in the state can be unsorted */
                /* (when the state subsumes another) */
                if (frozen_states[ptr->addr]) {
                    int found = 0;
                    unsigned p = ptr->addr;
                    /* find current transition in state */
                    do {
                        if (automat[p].d.dest_attr_term
                        == state[i].d.dest_attr_term) {
                            found = 1;
                            break;
                        }
                    } while (!automat[p++].b.last);
                    if (!found)
                        break;
                }
                else if (automat[ptr->addr+i].all_fields != state[i].all_fields)
                    break;
            }
#else
            if (automat[ptr->addr+i].all_fields != state[i].all_fields)
                break;
#endif
            if (i < 0)
                return ptr->addr;       /* identical state found */
        }
    }

#ifdef PRINT_STATISTICS
    for (i = state_len-1; i >= 0; i--)
        n_term_trans += state[i].b.term;
#endif

    if (aut_size + state_len >= MAX_AUT_SIZE)
        error("The automaton grew too large.");

    /* put state into automat */
#ifdef USE_INCLUSION
    if ((pos_in = find_subset(state, state_len)) != -1)
        pos_in = reorganize_state(pos_in, state, state_len);
    else
#endif
    {
        for (i = state_len-1; i >= 0; i--)
#ifdef USE_TREE
            automat[aut_size+i] = temp_state[i];
#else
            automat[aut_size+i] = state[i];
#endif
#ifdef USE_INCLUSION
        /* add info about state for futher including search */
        add_state_in(aut_size, aut_size + state_len);
#endif
    }

    if (ht_next_elem >= HT_ELEM_SIZE) {
        ht_next_elem = 0;
        if ((ht_elem[++ht_last_pos] =
            (bucket *) malloc(sizeof(bucket) * HT_ELEM_SIZE)) == NULL)
            error("Not enough memory.");
    }
    ptr = &ht_elem[ht_last_pos][ht_next_elem++];

    /* put pointer to the state into hash table */
#ifdef USE_INCLUSION
    if (pos_in != -1)
        ptr->addr = pos_in;     /* the state is into another */
    else
#endif
        ptr->addr = aut_size;
    ptr->size = state_len;
    ptr->next = hash_table[hash_addr];
    hash_table[hash_addr] = ptr;

#ifdef USE_INCLUSION
    if (pos_in != -1)
        pos = pos_in;          /* current state is included in another */
    else
#endif
    {
        pos = aut_size;
        aut_size += state_len;
    }

#ifdef PRINT_STATISTICS
    n_states++;
    n_trans += state_len;
#endif
    return pos;
}

#ifdef USE_INCLUSION
/*
** Hash function for including.
*/
unsigned hash_fun_in (unsigned p)
{
    return ((p * 324027) >> 13) % HT_SIZE;
}

/*
** Put a state into hash_table_in (for including).
*/
void add_state_in(int first, int last)
{
    int i;
    bucket *ptr;

    /* states with single transition can't include another */
    if (last - first == 1)
        return;

    for (i = first; i < last; i++) {
        int hash_addr = hash_fun_in(automat[i].d.dest_attr_term);

        if (ht_next_elem_in >= HT_ELEM_SIZE) {
            ht_next_elem_in = 0;
            if ((ht_elem_in[++ht_last_pos_in] =
                (bucket *) malloc(sizeof(bucket)*HT_ELEM_SIZE)) == NULL)
                error("Not enough memory.");
        }
        ptr = &ht_elem_in[ht_last_pos_in][ht_next_elem_in++];

        ptr->addr = first;
        ptr->size = last - first;
        ptr->next = hash_table_in[hash_addr];

        hash_table_in[hash_addr] = ptr;
        hash_table_in_count[hash_addr]++;
    }
}

/*
** Sort a given bucket (natural list mergesort).
*/
bucket *mergesort(bucket *p)
{
    static bucket head;
    bucket *r = &head, *pp, *pn;

    for (pp=p, pn=pp->next; pn; pp=pn, pn=pn->next) {
        if (pp->size > pn->size) {
            r->next = pn;
            r = pp;
        }
    }
    if (r == &head)
        return p;
    r->next = NULL;
    pp = mergesort(head.next);
    pn = mergesort(p);

    r = &head;
    while (pp && pn) {
        if (pp->size < pn->size) {
            r = r->next = pp;
            pp = pp->next;
        } else {
            r = r->next = pn;
            pn = pn->next;
        }
    }
    r->next = pp ? pp : pn;
    return head.next;
}

/*
** Find a state that subsumes current one.
*/
int find_subset(transition *state, unsigned state_len)
{
    int i, p, lp;
    int pos;
    int lpos = 0;
    int hash_addr;
    bucket *e;

    /* choose the bucket conitaining the fewest states */
    int best_hash, best_count = INT_MAX;
    for (i = state_len-1; i >= 0; i--) {
        hash_addr = hash_fun_in(state[i].d.dest_attr_term);
        if (hash_table_in_count[hash_addr] <= best_count) {
            best_hash  = hash_addr;
            best_count = hash_table_in_count[hash_addr];
        }
    }
    hash_addr = best_hash;

    pos = lpos;

    /* we try to select the smallest state that can include
       the current state, so the chosen list should be sorted */
    if (hash_table_in_count[hash_addr] > 1)
        hash_table_in[hash_addr] = mergesort(hash_table_in[hash_addr]);
    e = hash_table_in[hash_addr];

    while (e) {
        /* smaller states shouldn't be tested */
        if (e->size >= state_len) {
            p    = e->addr;
            lpos = pos;
            lp   = p;
            /* when the state is reorganized we can't do it one more time */
            if (!frozen_states[p]) {
                do { /* check the current state */
                    if (automat[p].d.dest_attr_term ==
                        state[pos].d.dest_attr_term) {
                        if (state[pos].b.last)
                            return lp;
                        pos++;
                    } else if (automat[p].b.attr > state[pos].b.attr)
                        break;
                } while (!automat[p++].b.last);
            }
            pos = lpos;
        }
        e = e->next;
    }

    return -1;
}

/*
** Reorganize a state.
*/
int reorganize_state(unsigned pos, transition *state, unsigned state_len)
{
    unsigned first_pos = pos, last_pos, i;
    int p;

    frozen_states[pos] = 1;

    /* find last edge of state */
    while (!automat[pos].b.last)
        pos++;
    last_pos = pos;

    for (p = state_len-1; p >= 0; p--) {
        if (automat[pos].b.attr == state[p].b.attr)
            pos--;
        else {
            unsigned fpos = pos;
            while (automat[fpos].b.attr != state[p].b.attr)
                fpos--;
            /* shift trans to new position */
            for (i = fpos; i < pos; i++) {
                unsigned temp = automat[i].all_fields;
                automat[i].all_fields = automat[i+1].all_fields;
                automat[i+1].all_fields = temp;
            }
            pos--;
        }
    }

    /* mark last transition */
    for (i = last_pos - 1; i >= first_pos; i--)
        automat[i].b.last = 0;
    automat[last_pos].b.last = 1;

    /* add new states for futher including searching */
    add_state_in(pos+1, last_pos+1);

    n_states_in++;
    n_trans_in += last_pos-pos;

    return pos + 1;             /* new state position */
}
#endif

/*
** Create the automaton.
*/
void make_automat(void)
{
    unsigned char s0[MAX_STR_LEN+1] = "";
    unsigned char s1[MAX_STR_LEN+1];
    size_t i = 0, p, q;
    transition new_trans;

#ifndef USE_TREE
    new_trans.b.last = 0;
#else
    new_trans.b.llast = 0;
    new_trans.b.rlast = 0;
#endif
    prepare_tables();   /* prepare data structures for algorithm */

    while ((q = read_string(s1)) != 0) {
        /* find common prefix */
        for (p=0; s1[p] == s0[p]; p++)
            ;
        if (s1[p] < s0[p])
            error("Strings in the lexicon file are unsorted.");

        /* emit states for suffix of previous string */
        while (i > p) {
            new_trans.b.dest = make_state(larval_state[i], l_state_len[i]);
            new_trans.b.attr = s0[--i];
            new_trans.b.term = is_terminal[i+1];
            larval_state[i][l_state_len[i]++].all_fields = new_trans.all_fields;
        }

        /* copy suffix of s1 to s0 */
        while (i < q) {
            s0[i] = s1[i];
            is_terminal[++i] = 0;
            l_state_len[i] = 0;
        }
        s0[q] = '\0';
        is_terminal[q] = 1;

#ifdef PRINT_STATISTICS
        if (n_strings % 65536 == 0)
            printf("%lu strings read\t%u transitions created\n", n_strings, aut_size);
#endif
    }
    while (i > 0) {
        new_trans.b.dest = make_state(larval_state[i], l_state_len[i]);
        new_trans.b.term = is_terminal[i];
        new_trans.b.attr = s0[--i];
        larval_state[i][l_state_len[i]++].all_fields = new_trans.all_fields;
    }
    start_state = make_state(larval_state[0], l_state_len[0]);
    automat[aut_size].b.dest = start_state;   /* put pseudo state */
}

/*
** Check if the given string exists in the automaton.
*/
int check_string(unsigned char *str)
{
    unsigned pos = 0;
    int i;
    unsigned char w;

#ifdef USE_TREE
    int found;
    int offset;
    transition e;

    pos = automat[pos].b.dest;

    for (i = 0; str[i]; i++) {
        if (pos > aut_size)
            error("Error in automaton file.");
        found = 0;
        w = str[i];
        offset = 1;

        /* search the tree for current character */
        while (1) {
            e = automat[pos + offset - 1];
            if (e.b.attr == w) {
                found = 1;
                break;
            }
            if (e.b.attr > w) {
                if (e.b.llast)
                    break;
                offset = offset * 2;
            } else {
                if (e.b.rlast)
                    break;
                offset = offset * 2 + 1;
            }
        }
        if (!found)
            return 0;
        if (str[i+1])          /* if not last character in string */
            pos = e.b.dest;    /* get index of new state */
    }
    return e.b.term;
#else
    for (i = 0; str[i]; i++) {
        /* get pointer to new state */
        pos = automat[pos].b.dest;
        w = str[i];

        if(!pos)
            return 0;
		
        if (pos > aut_size)
            error("Error in automaton file.");
        /* find current character in state */
        while (automat[pos].b.attr != (unsigned)w) {
            if (automat[pos++].b.last)
                return 0;
            if (pos > aut_size)
                error("Error in automaton file.");
        }
    }
    return automat[pos].b.term;
#endif
}

/*
** Check if the automaton is correct
** (test all the strings from a lexicon).
*/
void test_automat(void)
{
    n_strings = 0;
    n_chars   = 0;

    while (read_string(temp_str))
        if (!check_string(temp_str))
            printf("String %s not found!\n", temp_str);
}

/*
** Recursively list all the strings recognized by an automaton,
** beginning at the given position in the automaton and in the
** string.
*/
#ifdef USE_TREE
void list_strings(unsigned pos, int str_pos, int tree_pos)
#else
void list_strings(unsigned pos, int str_pos)
#endif
{
    int i;

    if (pos == 0)
        return;

    if (pos > aut_size)
        error("Error in automat file.");

#ifdef USE_TREE
    /* go left */
    if (!automat[pos + tree_pos].b.llast)
        list_strings(pos, str_pos, tree_pos + tree_pos + 1);

    /* add new character */
    temp_str[str_pos] = (unsigned char)(automat[pos+tree_pos].b.attr);
    if (automat[pos + tree_pos].b.term) {
        /* when string terminates at this character write the string */
        for (i = 0; i <= str_pos; i++)
            putc(temp_str[i], lex_file);
        putc('\n', lex_file);
        n_strings++;
        n_chars += str_pos + 2;
    }
    /* execute recursively for all characters in current state */
    list_strings(automat[pos + tree_pos].b.dest, str_pos+1, 0);

    /* go right */
    if (!automat[pos + tree_pos].b.rlast)
        list_strings(pos, str_pos, tree_pos + tree_pos + 2);
#else
    do {
        temp_str[str_pos] = (unsigned char) (automat[pos].b.attr);
        if (automat[pos].b.term) {
            /* when string terminates at this character write the string */
            for (i = 0; i <= str_pos; i++)
                putc(temp_str[i], lex_file);
            putc('\n', lex_file);
            n_strings++;
            n_chars += str_pos + 2;
        }
        /* execute recursively for all characters in current state */
        list_strings(automat[pos].b.dest, str_pos+1);
    } while (!(automat[pos++].b.last));
#endif
}

/*
** Show some statistics, including execution time.
*/
void show_stat(double exec_time)
{
    printf("%lu strings\t%lu characters\n", n_strings, n_chars);
#ifdef PRINT_STATISTICS
    printf("%u states\t%u transitions\t%u terminal transitions\n",
        n_states, n_trans, n_term_trans);
#ifdef USE_INCLUSION
    printf("%u included states\t%u included transitions\n",
        n_states_in, n_trans_in);
#endif
#endif
    printf("Execution time: %.3f seconds\t", exec_time);
    if (exec_time != 0.0) {
        printf("\nExecution speed: %.lf wps, %.lf cps\n",
			n_strings/exec_time, n_chars/exec_time);
    }
    printf("Size of the automaton: %u bytes\n", aut_size*sizeof automat[0]);
}

/*
** Read an automaton from a file fname.
*/
void read_automat(char *fname)
{
    if ((aut_file = fopen(fname, "rb")) == NULL)
        error("Cannot open input file.");

    aut_size = fread(automat, sizeof automat[0], MAX_AUT_SIZE, aut_file);
    fclose(aut_file);
    if (aut_size >= 2) {
        /* create a pseudo state pointing to the start state */
        memcpy(&start_state, &automat[0], sizeof automat[0]);
        automat[0].b.dest = automat[0].all_fields;
        if (start_state < aut_size)
            return;
    }
    error("Error in input file.");
}

/*
** Save the automaton to a file of given name.
*/
void save_automat(char *fname)
{
    if ((aut_file = fopen(fname, "wb")) == NULL)
        error("Cannot open output file.");

    /* create a pseudo state pointing to the start state */
    automat[0].all_fields = start_state;
    if (fwrite(automat, sizeof automat[0], aut_size, aut_file) < aut_size)
        error("Error writing to file.");
    fclose(aut_file);
}

/*
** Open the lexicon file.
*/
void open_dict(char *fname, char *attr)
{
    if ((lex_file = fopen(fname, attr)) == NULL)
        error("Cannot open lexicon file.");
    set_io_buffer(lex_file, 8192);
}

/*
** Print usage info.
*/
void show_info(void)
{
    printf("Usage: am -m automaton_file lexicon_file -- make an automaton\n"
           "       am -l automaton_file lexicon_file -- list an automaton\n"
           "       am -t automaton_file lexicon_file -- test an automaton\n");
    exit(EXIT_SUCCESS);
}

int main(int argc, char **argv)
{
    clock_t t1, t2;

    if (argc == 4) {
        if (!strcmp(argv[1], "-m")) { /* make a new automaton */
            open_dict(argv[3], "r");
            t1 = clock();
            make_automat();
            save_automat(argv[2]);
        } else if (!strcmp(argv[1], "-t")) { /* check automaton */
            open_dict(argv[3], "r");
            t1 = clock();
            read_automat(argv[2]);
            test_automat();
        } else if (!strcmp(argv[1], "-l")) { /* list strings */
            open_dict(argv[3], "w");
            t1 = clock();
            read_automat(argv[2]);
#ifdef USE_TREE
            list_strings(start_state, 0, 0);
#else
            list_strings(start_state, 0);
#endif
        } else
            show_info();
        fclose(lex_file);
        t2 = clock();
        show_stat((double) (t2 - t1) / CLOCKS_PER_SEC);
    } else
        show_info();

    fgetc(stdin);
    return EXIT_SUCCESS;
}
