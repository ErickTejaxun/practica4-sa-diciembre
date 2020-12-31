


pipeline
{
    agent any  
    stages
    {
        stage("Prueba de ejecución")
        {               
            
            steps
            {                                     
                sh 'export PORT=1000'
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
    }
}