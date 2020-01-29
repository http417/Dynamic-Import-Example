# Dynamic-Import-Example
An Example Usage of Dynamic Module Import

This does not use the React lazy / Suspense mechanism -- just the stage 3 dynamic import mechanism.  Webpack takes care of the rest.

Note: in order to utilize dynamic import with variable paths (for multiple modules), simply using a variable name fails.  In this error case, Webpack apparently does not have enough information to retrieve the module.  The workaround is to utilize a string literal with a fixed prefix.  In this case ```import(`./${path}`)``` worked.

