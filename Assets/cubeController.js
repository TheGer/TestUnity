#pragma strict

var s:int;



function Start () {
	print("test");
}

function Update () {
	transform.Translate(Vector3.left * Input.GetAxis("Horizontal") * s);
}