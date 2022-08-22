**Pipenv commands**  

* Install with `pip3 install pipenv`
* Create venv with `pipenv shell`
* Exit with `exit`
* Install packages with `pipenv install <package-name>`
* Run a Python command without activating virtual environment within the current environment: `pipenv run python`
* To run a file, use `pipenv run  python <file-name>`
* To install dependencies and packages using pip’s `requirements.txt` use `pipenv install -r <path-of-requirements.txt>`
* To generate the content of requirements.txt use `pipenv lock -r`
* To create a requirements.txt, redirect this output to the requirements.txt using `pipenv lock -r > requirements.txt`
* To uninstall a package using pipenv: `pipenv uninstall <package-name>`
* To uninstall all packages use `-all` flag
* To safely remove a package using pipenv: `pipenv -rm`
* To deactivate the pipenv environment, typ `deactivate` in the command line

**Pip commands**  

* `pip freeze` will show packages that have been installed in a virtual environment
