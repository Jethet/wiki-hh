

Error message **checkPermissions Missing write access to /usr/local/lib/node_modules/npm/node_modules/abbrev** when installing with npm. This is an issue with permissions.

* check the owner of the directory: `ls -la /usr/local/lib/node_modules`
* if access is denied because the node_module folder is owned by root, then change owner
* first, check current owner `id -un`
* then change with `sudo chown -R ownerName: /usr/local/lib/node_modules` where *ownername* is what came out of the previous step


