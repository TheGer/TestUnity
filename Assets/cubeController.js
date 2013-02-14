#pragma strict

var s:int;



function Start () {

}

function Update () {
	transform.Translate(Vector3.left * Input.GetAxis("Horizontal") * s);
}