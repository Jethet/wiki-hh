To write in a text file: `echo "this is the text" > example-filename` 
This also creates the file *example-filename* if it does not exist already.  
It will replace any text that is already there. With `echo "this is the text" >> example-filename` the text is not replaced.


NB: `rm *` will remove all files
Remove files with a specific pattern: never put a space after *, always immediately put pattern after *.
