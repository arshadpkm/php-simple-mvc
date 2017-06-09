<?php

use Illuminate\Database\Eloquent\Model as Eloquent;

class User extends Eloquent
{
	protected $name;
	protected $fillable = ['name'];
}