<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule();

$capsule->addConnection([
	'driver' => 'mysql',
	'host'	 => '127.0.0.1',
	'username' => 'root',
	'password' => 'Happy@123',
	'database' => 'vahan',
	'chartset' => 'utf8',
	'collation' => 'utf8_unicode_ci',
	'prefix' => ''
]);

$capsule->bootEloquent();