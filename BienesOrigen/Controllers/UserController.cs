using Logic;
using Microsoft.AspNetCore.Mvc;

namespace BienesOrigen.Controllers
{
    [Route("api/[controller]")] // Define la ruta del API
    [ApiController] //Idica que es un controlador tipo API
    public class UserController : Controller
    {
        [HttpGet] //Metodo HTTP (get = obtener)
        public IActionResult Get() // Metodo para obtener usuarios
        {
            UserLogic userLogic = new UserLogic(); // Llamando al proyecto de logica 
            var resultado = userLogic.GetUsers(); // Llamnado al metodo getusers del proyecto de logica 
            return Ok(resultado); // retornando los usuarios encontrados
        }

        [HttpGet] //Metodo HTTP (get = obtener)
        [Route("ValidateUser")]
        public IActionResult ValidateUser(string user, string pass) // Metodo para validar un usuario existente
        {
            UserLogic userLogic = new UserLogic(); // Llamando al proyecto de logica 
            var resultado = userLogic.ValidateUser(user, pass); // Llamnado al metodo validateusers del proyecto de logica 
            return Ok(resultado); // retornando el resultado de la busqueda del usuario 
        }
    }
}
