# History of changes for Spyder 6

## Version 6.1.3 (Unreleased)

### API changes

* The `spyder.api.plugin_registration.mixins` module, with the mixin for
  handling the `@on_plugin_available` and `@on_plugin_teardown` decorators
  in the `SpyderPluginV2` class, is now documented as pending deprecation as
  a public module, will become an alias of a private `_mixins` module
  and issue a `DeprecationWarning` in Spyder 6.2, and have the public alias
  be removed in Spyder 7.0. It is a private implementation detail that wasn't
  designed or intended to be used directly by external code; plugins
  access its functionality through the `SpyderPluginV2` class instead.
* The vestigial `SpyderPluginRegistry.old_plugins` attribute in the
  `spyder.api.plugin_registration.registry` module, originally added
  in Spyder 5 to list legacy Spyder 4 plugins, has been removed.
  It was mistakenly left over when Spyder 6 fully dropped support for
  Spyder 4 plugins, which never actually functioned as intended
  and should be updated to support modern Spyder 5+ plugins instead.
* Setters for the `all_internal_plugins` (`set_all_internal_plugins()`),
  `all_external_plugins` (`set_all_external_plugins()`) and
  `main` (`set_main()`) instance attributes of the `SpyderPluginRegistry` class
  in the `spyder.api.plugin_registration.registry` module are now
  documented as pending deprecation, will raise a `DeprecationWarning`
  in Spyder 6.2, and will be removed in Spyder 7.0. Set the attributes
  directly instead.
* Passing arbitrary `*args` and `**kwargs` to the
  `SpyderPluginRegistry.register_plugin()` method of the
  `spyder.api.plugin_registration.registry` module, needed for backward
  compatibility before the Editor plugin was migrated in Spyder 6 to the
  new plugin API introduced in Spyder 5, is now documented as pending
  deprecation, will raise a DeprecationWarning in Spyder 6.2 and will be
  removed in Spyder 7.0.
* Importing from the `enum` and `new_api` submodules of the
  `spyder.api.plugins` module is now documented as pending deprecation.
  In Spyder 6.2, they will be renamed to the private `_enum` and `_api`
  modules, respectively, with the original names becoming aliases raising a
  `DeprecationWarning` on import, that will be removed in Spyder 7.0.
  They should be imported from their canonical location, the top-level
  `spyder.api.plugins` module, instead.
* The `main` attribute of `SpyderPluginV2` is now a property,
  to reduce duplication with the identically-valued `_main` attribute.
* The `_added_toolbars` and `_actions` private attributes of `SpyderPluginV2`
  have been removed, as they are not used at least in Spyder 6 and above.
* Obsolete checks/warnings for the removed `register` and `unregister`
  methods of `SpyderPluginV2` have been removed, as they are unsupported since
  Spyder 5.1/5.2 and any existing code still using them is already broken.
  The `on_initialize` and `on_close` methods should be used instead.

----

## Version 6.1.2 (2025-12-17)

### New features

* Set a maximum number of plots in the Plots pane to prevent a memory leak
  when generating many of them.
* Simplify UX to create directories and files from the files/project explorer.
* Add support for Pylint 4.

### Important fixes

* Fix update process for installer based installations that require admin
  permissions on Windows.
* Fix Profiler error when the IPython console kernel takes time to start.
* General fixes to the API module (`spyder.api`) docstrings and typings.

### API changes

* Fix API version not being correctly bumped to 2.0.0 for Spyder 6.1,
  and formally expose and document `VERSION_INFO` tuple.
* The `spyder.api.editor` module, containing legacy aliases of
  `EditorExtension` and `Panel` that can be accessed directly from the
  Editor plugin in Spyder 6.0+, is now documented as pending deprecation,
  will issue a `DeprecationWarning` in Spyder 6.2 and be removed in Spyder 7.0.
  Import them from `spyder.plugins.editor.api` instead.
* The `spyder.api.plugins.enum` and `spyder.api.plugins.new_api` modules
  are now documented to be pending being marked as private, with a
  `DeprecationWarning` on importing the old names in Spyder 6.2, and their
  removal in Spyder 7.0. All of their public APIs are availible from
  and are been canonically imported from `spyder.api.plugins` since Spyder 5.1.


### Issues Closed

* [Issue 25484](https://github.com/spyder-ide/spyder/issues/25484) - Possible place where translation function usage is not needed ([PR 25490](https://github.com/spyder-ide/spyder/pull/25490) by [@dalthviz](https://github.com/dalthviz))
* [Issue 25403](https://github.com/spyder-ide/spyder/issues/25403) - Another problem associated with Windows usernames containing spaces ([PR 25434](https://github.com/spyder-ide/spyder/pull/25434) by [@mrclary](https://github.com/mrclary))
* [Issue 25387](https://github.com/spyder-ide/spyder/issues/25387) - Error when updating Spyder-updater ([PR 25460](https://github.com/spyder-ide/spyder/pull/25460) by [@mrclary](https://github.com/mrclary))
* [Issue 25342](https://github.com/spyder-ide/spyder/issues/25342) - Support for Pylint 4 ([PR 25432](https://github.com/spyder-ide/spyder/pull/25432) by [@ccordoba12](https://github.com/ccordoba12))
* [Issue 25327](https://github.com/spyder-ide/spyder/issues/25327) - Another AttributeError in Profiler if kernel fails to start ([PR 25401](https://github.com/spyder-ide/spyder/pull/25401) by [@ccordoba12](https://github.com/ccordoba12))
* [Issue 25301](https://github.com/spyder-ide/spyder/issues/25301) - Infinite loop execution in IPython console ([PR 25455](https://github.com/spyder-ide/spyder/pull/25455) by [@ccordoba12](https://github.com/ccordoba12))
* [Issue 25249](https://github.com/spyder-ide/spyder/issues/25249) - High memory usage when plotting too many figures ([PR 25320](https://github.com/spyder-ide/spyder/pull/25320) by [@jsbautista](https://github.com/jsbautista))
* [Issue 25230](https://github.com/spyder-ide/spyder/issues/25230) - Project tree should not collapse folders when adding/removing files with right click ([PR 25358](https://github.com/spyder-ide/spyder/pull/25358) by [@jsbautista](https://github.com/jsbautista))

In this release 8 issues were closed.

### Pull Requests Merged

* [PR 25490](https://github.com/spyder-ide/spyder/pull/25490) - PR: Remove unneeded translation function call from `RecoveryDialog` (Editor), by [@dalthviz](https://github.com/dalthviz) ([25484](https://github.com/spyder-ide/spyder/issues/25484))
* [PR 25483](https://github.com/spyder-ide/spyder/pull/25483) - PR: Explicitly set conda-forge channel for miniconda install in windows and macos test workflows (CI), by [@mrclary](https://github.com/mrclary)
* [PR 25477](https://github.com/spyder-ide/spyder/pull/25477) - PR: Increase max number of plots shown by default in Plots (Config), by [@ccordoba12](https://github.com/ccordoba12)
* [PR 25475](https://github.com/spyder-ide/spyder/pull/25475) - PR: Fix issue where updater triggers error reporter if UAC is cancelled, by [@mrclary](https://github.com/mrclary)
* [PR 25474](https://github.com/spyder-ide/spyder/pull/25474) - PR: Update translations from Crowdin, by [@spyder-bot](https://github.com/spyder-bot)
* [PR 25473](https://github.com/spyder-ide/spyder/pull/25473) - PR: Update translations for 6.1.2, by [@dalthviz](https://github.com/dalthviz)
* [PR 25470](https://github.com/spyder-ide/spyder/pull/25470) - PR: Remove translation call for variable on `QInputDialogCombobox` (Explorer), by [@dalthviz](https://github.com/dalthviz)
* [PR 25460](https://github.com/spyder-ide/spyder/pull/25460) - PR: Elevate User Account Control on Windows if Spyder is installed for all users (Installers), by [@mrclary](https://github.com/mrclary) ([25387](https://github.com/spyder-ide/spyder/issues/25387))
* [PR 25455](https://github.com/spyder-ide/spyder/pull/25455) - PR: Prevent running a file over and over again when the kernel is not ready (IPython console), by [@ccordoba12](https://github.com/ccordoba12) ([25301](https://github.com/spyder-ide/spyder/issues/25301))
* [PR 25451](https://github.com/spyder-ide/spyder/pull/25451) - PR: Add & revise docstrings in the `spyder.api.config` module, by [@CAM-Gerlach](https://github.com/CAM-Gerlach)
* [PR 25446](https://github.com/spyder-ide/spyder/pull/25446) - PR: Bump API version to 2.0 & clean up doc & type issues, by [@CAM-Gerlach](https://github.com/CAM-Gerlach)
* [PR 25435](https://github.com/spyder-ide/spyder/pull/25435) - PR: Add/revise docs & type hints for top-level `spyder.api` modules, by [@CAM-Gerlach](https://github.com/CAM-Gerlach)
* [PR 25434](https://github.com/spyder-ide/spyder/pull/25434) - PR: Use short name path on Windows for `TMP` and `TEMP` environment variables in kernelspec (IPython console), by [@mrclary](https://github.com/mrclary) ([25403](https://github.com/spyder-ide/spyder/issues/25403))
* [PR 25432](https://github.com/spyder-ide/spyder/pull/25432) - PR: Add support for `pylint` 4 and bump `python-lsp-server` to 1.14.0, by [@ccordoba12](https://github.com/ccordoba12) ([25342](https://github.com/spyder-ide/spyder/issues/25342))
* [PR 25401](https://github.com/spyder-ide/spyder/pull/25401) - PR: Prevent error when profiling is stopped (Profiler), by [@ccordoba12](https://github.com/ccordoba12) ([25327](https://github.com/spyder-ide/spyder/issues/25327))
* [PR 25396](https://github.com/spyder-ide/spyder/pull/25396) - PR: Use `macos-15-intel` for macOS x86_64 installers because `macos-13` is deprecated, by [@mrclary](https://github.com/mrclary)
* [PR 25395](https://github.com/spyder-ide/spyder/pull/25395) - PR: Fix issue where extraneous lines in stdout cause `get_user_environment_variables` to fail, by [@mrclary](https://github.com/mrclary)
* [PR 25393](https://github.com/spyder-ide/spyder/pull/25393) - PR: Use `macos-14` image to run our tests on Mac (CI), by [@ccordoba12](https://github.com/ccordoba12)
* [PR 25388](https://github.com/spyder-ide/spyder/pull/25388) - PR: Fix errors in `spyder.api` docstrings & add `__all__` for exported symbols, by [@CAM-Gerlach](https://github.com/CAM-Gerlach)
* [PR 25358](https://github.com/spyder-ide/spyder/pull/25358) - PR: Simplify UX to create new files and directories (Files/Projects), by [@jsbautista](https://github.com/jsbautista) ([25230](https://github.com/spyder-ide/spyder/issues/25230))
* [PR 25320](https://github.com/spyder-ide/spyder/pull/25320) - PR: Set max number of figures shown in Plots to prevent memory leak, by [@jsbautista](https://github.com/jsbautista) ([25249](https://github.com/spyder-ide/spyder/issues/25249))

In this release 21 pull requests were closed.

