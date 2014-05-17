#========================
#CONFIG
#========================
set :application, "partner.insales.sovechkin.com"
#========================
#CONFIG
#========================
require           "capistrano-offroad"
offroad_modules   "defaults", "supervisord"
set :repository,  "git@github.com:pomeo/insalespartner.git"
set :supervisord_start_group, "partner"
set :supervisord_stop_group, "partner"
#========================
#ROLES
#========================
set  :gateway,    "#{application}"  # main server
role :app,        "ubuntu@10.3.10.130" # lxc container
 
after "deploy:create_symlink", "deploy:npm_install", "deploy:restart"
