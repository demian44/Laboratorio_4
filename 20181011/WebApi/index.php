<?php

const PROYECT_NAME = '/Parcial_Programacion_3/';
include_once './elements.php';

$app = new \Slim\App();
$app->group('/media', function () {
    /////////////////////////////    MEDIAS

    $this->post('/newMedia', \MediaApi::class . ':CargarUno')
        ->add(\MediaMiddleware::class . ':CheckCarga');

    $this->delete('/', \MediaApi::class . ':BorrarUno')
        ->add(\MediaMiddleware::class . ':ExisteId')
        ->add(\MediaMiddleware::class . ':IdCargado')
        ->add(\LoginMiddleware::class . ':ValidarDuenio');

    $this->get('/', \MediaApi::class . ':TraerTodos');  

});//->add(\LoginMiddleware::class . ':ValidarToken');

/////////////////////////////    USUARIOS

$app->group('/users', function () {

    $this->post('/', \UserApi::class . ':CargarUno');
        // ->add(\UserMiddleware::class . ':UserRepetido')
        // ->add(\UserMiddleware::class . ':CheckUserData');
    $this->get('/', \UserApi::class . ':TraerTodos');
    $this->put('/', \UserApi::class . ':Editar')
        ->add(\UserMiddleware::class . ':CheckUserEdit');

    $this->delete('/', \UserApi::class . ':Borrar')
        ->add(\UserMiddleware::class . ':ExisteId')
        ->add(\UserMiddleware::class . ':IdCargado')
        ->add(\LoginMiddleware::class . ':ValidarDuenio');
    $this->post('/saveResult', \UserApi::class . ':SaveResult');

})->add(\LoginMiddleware::class . ':ValidarToken');

$app->group('/login', function () {

    /////////////////////////////    Login

    $this->post('/', \TokenApi::class . ':Login');

    $this->post('/chekking', \TokenApi::class . ':ValidarToken');

})->add(\LoginMiddleware::class . ':checkLoginData');

$app->group('/file', function () {

    /////////////////////////////    Login

    $this->post('/', \TokenApi::class . ':File');

  

});
$app->run();
