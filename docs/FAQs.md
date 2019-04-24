# FAQs

## Cannot create container for service mongo: b'Drive has not been shared'

```shell
λ docker-compose up
Creating network "pelicanapp_default" with the default driver
...
Creating pelicanapp_mongo_1 ... error

ERROR: for mongo  Cannot create container for service mongo: b'Drive has not been shared'
ERROR: Encountered errors while bringing up the project.
```

[Solution](https://blogs.msdn.microsoft.com/stevelasker/2016/06/14/configuring-docker-for-windows-volumes):

1. Go to Docker > Settings > Shared Drives
2. Check `C` and click Apply
