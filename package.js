var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-button',
  summary : 'Semantic UI - Button (official): Single component release of button',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Button.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
