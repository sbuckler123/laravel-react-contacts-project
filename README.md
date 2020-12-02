# laravel-react-contacts-project
Laravel/React Contacts Project

##Installation instructions to run on local machine

##Windows users:
* Download wamp: http://www.wampserver.com/en/
* Download and extract cmder mini: https://github.com/cmderdev/cmder/releases/download/v1.1.4.1/cmder_mini.zip
* Update windows environment variable path to point to your php install folder (inside wamp installation dir) (here is how you can do this http://stackoverflow.com/questions/17727436/how-to-properly-set-php-environment-variable-to-run-commands-in-git-bash)
 

cmder will be refered as console

##Mac Os, Ubuntu and windows users continue here:
1. Create a database locally named `laravelreactproject` utf8_general_ci 
2. Download composer https://getcomposer.org/download/
3. Clone/Download the current repository
4. In `.env` file inside your project root fill the database information.
  (windows wont let you do it, so you have to open your console cd your project root directory and run `mv .env.example .env` )
5. Open the console and cd your project root directory
6. Run `composer install` or ```php composer.phar install```
7. Run `php artisan key:generate` 
8. Run `php artisan migrate`
9. Run `php artisan serve`

#####You can now access the project at localhost:8000 :)
