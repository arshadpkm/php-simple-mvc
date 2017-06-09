<?php

class Home extends Controller
{

	protected $user;

	function __construct()
	{
		$this->user = $this->model('User');
	}

    public function index($name = '')
    {
        $user = $this->user;
        $user->name = $name;
        
        $this->view('home/index', ['name' => $user->name]);
    }

    public function create($name='')
    {
    	User::create([
    		'name' => $name
    		]);
    }
}