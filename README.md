Yarn installs a dependency's optional dependencies by default.  You can [use `--ignore-optional` to work around this](https://github.com/yarnpkg/yarn/commit/9dd9599b9b7e7ddb8b669408aac9f3c0a562d5c7).

I forget this so often that this repo now exists :|

To verify:
- Clone this repo
- `yarn test`
  - This will install relevant dependencies, and throw an exception if:
    - The optional dependency *is not* installed
    - The peer dependency *is* installed

Expected output:
```
Is the optional dependency '@goodforonefare/solo-dependency-1' installed?
    true
Is the peer dependency '@goodforonefare/solo-dependency-2' installed?
    false
````
