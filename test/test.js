var assert = require('assert');
const { json } = require('body-parser');
var expect = require('expect');
var Request = require("request");
var should = require("should");
describe('Pruebas unitarias sobre el servidor de backend', ()=>
{

    it('Pagina de inicio. Prueba de salud de la página. Debe regresar código 200', (done)=>
    {
        Request.get(            
        {
            url:`http://localhost:${process.env.PORT}/`,
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


    it('Pagina de información. Prueba de salud de la página. Debe regresar código 200', (done)=>
    {
        Request.get(            
        {
            url:`http://localhost:${process.env.PORT}/info`,
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
            url:`http://localhost:${process.env.PORT}/info`,
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
            url:`http://localhost:${process.env.PORT}/error`,
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
            url:`http://localhost:${process.env.PORT}/error`,
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