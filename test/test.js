var assert = require('assert');
const { json } = require('body-parser');
var expect = require('expect');
var Request = require("request");
var should = require("should");


var puerto =3000;
describe('Pruebas unitarias sobre el servidor de backend', ()=>
{

    it('Pagina de inicio. Prueba de salud de la página. Debe regresar código 200', (done)=>
    {
        Request.get(            
        {
            url:`http://127.0.0.1:${puerto}/`,
        },
        function(error, response, body)
        {
            console.log(`http://127.0.0.1:${puerto}/`);
            if(!error)
            {
                console.log(response.body.payload);
                response.statusCode.should.equal(200);                               
                done();
            }
            else
            {
                console.log(error);
            }
        }        
        );
    });


    it('Pagina de información. Prueba de salud de la página. Debe regresar código 200', (done)=>
    {
        Request.get(            
        {
            url:`http://127.0.0.1:${puerto}/info`,
        },
        function(error, response, body)
        {
            if(!error)
            {
                console.log(response.body.payload);
                response.statusCode.should.equal(200);                               
                done();
            }
            else
            {
                console.log(error);
            }
        }        
        );
    });

    it('Pagina de Información. Prueba de payload', (done)=>
    {
        Request.get(            
        {
            url:`http://127.0.0.1:${puerto}/info`,
        },
        function(error, response, body)
        {
            if(!error)
            {
                console.log(response.body.payload);
                expect(response.body).toBe('informacion');                                  
                done();
            }
            else
            {
                console.log(error);
            }
        }        
        );
    });



    it('Pagina de error. Prueba de salud de la página. Debe regresar código 200', (done)=>
    {
        Request.get(            
        {
            url:`http://127.0.0.1:${puerto}/error`,
        },
        function(error, response, body)
        {
            if(!error)
            {
                console.log(response.body.payload);
                response.statusCode.should.equal(200);                               
                done();
            }
            else
            {
                console.log(error);
            }
        }        
        );
    });

    it('Pagina de error. Prueba de payload', (done)=>
    {
        Request.get(            
        {
            url:`http://127.0.0.1:${puerto}/error`,
        },
        function(error, response, body)
        {
            if(!error)
            {
                console.log(response.body.payload);
                expect(response.body).toBe('error');                                  
                done();
            }
            else
            {
                console.log(error);
            }
        }        
        );
    });    
 
  

});