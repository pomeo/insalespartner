#========================
#CONFIG
#========================
set :application, "partner.salesapps.ru"
#========================
#CONFIG
#========================
require           "capistrano-offroad"
offroad_modules   "defaults", "supervisord"
set :repository,  "git@github.com:pomeo/insalespartner.git"
set :supervisord_start_group, "app"
set :supervisord_stop_group,  "app"
#========================
#ROLES
#========================
role :app,        "ubuntu@#{application}"
 
after "deploy:create_symlink", "deploy:npm_install", "deploy:restart"
