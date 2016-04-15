# UT Cli SQL

The purpose of this module is to make running schema synchronisation script possible without cloning implementation projects.

It is highly recommended to install module as global:
```cli
npm i -g ut-cli-sql
```

ut-cli-sql is working by directly using ut-port-sql module passing a list of schema directories to be processed and database configuration. Configuration file should be located
at one of the default locations specified by [rc module](https://www.npmjs.com/package/rc):

-    command line arguments (parsed by minimist)
-    environment variables prefixed with ${appname}_
    -        or use "__" to indicate nested properties
    -        (e.g. appname_foo__bar__baz => foo.bar.baz)
-    if you passed an option --config file then from that file
-    a local .${appname}rc or the first found looking in ./ ../ ../../ ../../../ etc.
-    $HOME/.${appname}rc
-    $HOME/.${appname}/config
-    $HOME/.config/${appname}
-    $HOME/.config/${appname}/config
-    /etc/${appname}rc
-    /etc/${appname}/config
-    the defaults object you passed in.

The module is tested by using convention **$HOME/.${appname}/config** with json config as shown in example:

```json
{
    "log": true,
    "logLevel": "",
    "id": "",
    "type": "",
    "createTT": true,
    "db": {
        "user": "switch",
        "password": "switch",
        "server": "devdb08",
        "database": "impl-test-db"
    },
    "schema": [
        { "path" : "... path to project directory ... /ut-core/schema" },
        { "path" : "... path to project directory ... /ut-document/schema" },
        { "path" : "... path to project directory ... /ut-customer/schema" },
        { "path" : "... path to project directory ... /ut-user/schema" },
        { "path" : "... path to project directory ... /impl-test/db/schema" }
    ]
}
```

Once the module is installed as global and configuration is set you just need to run:
```cli
ut-sql
```