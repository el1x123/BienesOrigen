using Logic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BienesOrigen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HouseholdsController : ControllerBase
    {
        [HttpGet] //Metodo HTTP (get = obtener)
        public IActionResult Get() // Metodo para obtener las viviendas
        {
            HouseholdsLogic householdsLogic = new HouseholdsLogic(); // Llamando al proyecto de logica 
            var resultado = householdsLogic.GetHouseholds(); // Llamnado al metodo gethouseholds del proyecto de logica 
            return Ok(resultado); // retornando las viviendas encontradas
        }
    }
}
