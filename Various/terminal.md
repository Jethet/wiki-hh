**cd**  
`cd` go back to the home directory  
`cd ..` go up one level  
`cd ../../dir_name` goes back two levels then down one level  

**clear terminal**  
`clear` clears all the text from the terminal.  

**copy**  
`cp <current location> <destination>`  
The copy can be renamed: specify the name on the destination.  

**echo**  
To write in a text file: `echo "this is the text" > example-filename` 
This also creates the file *example-filename* if it does not exist already.  
It will replace any text that is already there. With `echo "this is the text" >> example-filename` the text is not replaced.  

**list**  
`ls -R` shows full tree of directories etc.  
`ls -a` shows all folders and (hidden) files in folders.  

**move/rename** 
`mv` to rename a file or directory. The example renames folder static to tests:  
`mv terminal-exercises-1/src/static terminal-exercises-1/src/tests`


**remove**  
`rm <filename>` will remove the file.
NB: `rm *` will remove **all** files.
To remove files with a specific pattern: never put a space after *, always immediately put pattern after *.  
`rmdir <foldername>` will remove the folder.
`rm -r <foldername>` removes folder, subdirectories, and files in all of these. `-r` stands for *recursive*.

