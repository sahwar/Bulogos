In case you want to translate SpeedyPainter into your own language, these are the steps you need to follow.

1) Create a copy of the file localization_ENG.txt", and make sure the new file is still in the same folder of the original file
  ("SpeedyPainter installation dir"\languages\")


2) Rename the newly created file using the following filename format:

  "localization_***.txt"

  Where *** is a 3 letter abbreviation of your language (e.g. ENG for english, ITA for italian ...)


3) Open the newly created file, as you can see the file has a list of key/value pairs like in the following lines:

PLEASE_WAIT_STR = Please wait...
SIZE_STR        = Size
OPACITY_STR     = Opacity
HARDNESS_STR    = Hardness

To provide your own localization, you have to replace each sentence that appears to the right of the '=' character, with the proper translation.
As an example, if you are trying to create a french localization for SpeedyPainter, the lines we have seen before should become something like this:

PLEASE_WAIT_STR	= Veuillez patienter, s'il vous plaît...
SIZE_STR				=	Taille
OPACITY_STR			=	Opacité
HARDNESS_STR		=	Dureté


4) Once you created your own localization file, start SpeedyPainter, and choose the new language in the settings dialog (press F12 to show the dialog); the new language option should now be available in the languages combo box, choose it and select 'Apply'.


Hope this can be useful.
For additional help or for suggestions and segnalations of mistakes in the current localization files, feel free to contact me at (speedypainter.software@gmail.com).
Thank you,
Andrea Buzzelli