


pipeline
{
    agent any  

    environment {
        PORT = 100000        
    }

    stages
    {
        stage("Prueba de ejecución")
        {               
            
            steps
            {         
                sh 'forever stopall'                            
                sh 'export PORT=10000'
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
                sh 'export PORT=10000'
                sh 'npm test'                
                sh 'forever stopall'
                echo 'Pruebas realizadas con éxito '                
            }                        
        }
    }
}