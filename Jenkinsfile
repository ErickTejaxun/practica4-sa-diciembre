


pipeline
{
    agent any  


    stages
    {
        stage("Prueba de ejecución")
        {               
            
            steps
            {                     
                sh 'forever stopall'                                            
                echo 'Pruebas de ejecución de la aplicacion'
                sh 'npm install'                
                sh 'npm start'                  
                
            }
        }

        stage("Lanzando pruebas")
        {
            steps
            {
                echo 'Comenzando pruebas unitarias'                
                sh 'npm test'                
                sh 'forever stopall'
                echo 'Pruebas realizadas con éxito '                
            }                        
        }

        stage("Creando artefacto")
        {
            steps
            {
                sh 'zip -r app.zip ./'
                sh 'cp app.zip /home/jenkins/'
                echo 'Se ha creado el artefacto'                
            }
        }

        stage("Configurando servidor de prueba y despliegue a través de ansible")
        {
            steps
            {
                dir("ansible")
                {
                    sh 'ansible-playbook  ./configuracion_servidor_prueba.yaml'                    
                }                
            }
        }

        stage("Configurando servidor de produccion y despliegue a través de ansible")
        {
            steps
            {
                dir("ansible")
                {
                    sh 'ansible-playbook  ./configuracion_servidor_produccion.yaml'
                }                
            }
        }        
        
    }
}