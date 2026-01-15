./DEPLOY_TO_GCP.ps1


# Script de Despliegue para SmartJCP en Google Cloud Platform
# Ejecutar en PowerShell

$PROJECT_ID = Read-Host -Prompt "Ingrese el ID de su proyecto de Google Cloud (ej: biology-game-85da o nuevo smartjcp-xyz)"
$REGION = "us-central1"

Write-Host "Configurando proyecto $PROJECT_ID..."
gcloud config set project $PROJECT_ID

Write-Host "Habilitando APIs necesarias..."
gcloud services enable run.googleapis.com sqladmin.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com

Write-Host "Creando repositorio en Artifact Registry..."
# Ignoramos error si ya existe
gcloud artifacts repositories create smartjcp-repo --repository-format=docker --location=$REGION --description="Repo para SmartJCP" 2>$null

Write-Host "Construyendo y subiendo imagen de BACKEND..."
gcloud builds submit --tag $REGION-docker.pkg.dev/$PROJECT_ID/smartjcp-repo/backend ./backend

Write-Host "Construyendo y subiendo imagen de FRONTEND..."
gcloud builds submit --tag $REGION-docker.pkg.dev/$PROJECT_ID/smartjcp-repo/frontend ./frontend

Write-Host "Desplegando BACKEND en Cloud Run..."
# Se necesita la URL de la base de datos. Si no la tienes, se usará un placeholder.
$DB_URL = Read-Host -Prompt "Ingrese la URL de conexión a la Base de Datos (Postgres) o presione Enter para configurar después"

gcloud run deploy smartjcp-api `
    --image $REGION-docker.pkg.dev/$PROJECT_ID/smartjcp-repo/backend `
    --platform managed `
    --region $REGION `
    --allow-unauthenticated `
    --set-env-vars DATABASE_URL="$DB_URL"

# Obtener URL del Backend
$BACKEND_URL = gcloud run services describe smartjcp-api --platform managed --region $REGION --format 'value(status.url)'
Write-Host "Backend desplegado en: $BACKEND_URL"

Write-Host "Desplegando FRONTEND en Cloud Run..."
# El frontend necesita saber la URL del backend
gcloud run deploy smartjcp-web `
    --image $REGION-docker.pkg.dev/$PROJECT_ID/smartjcp-repo/frontend `
    --platform managed `
    --region $REGION `
    --allow-unauthenticated `
    --set-env-vars VITE_API_URL="$BACKEND_URL"

$FRONTEND_URL = gcloud run services describe smartjcp-web --platform managed --region $REGION --format 'value(status.url)'

Write-Host "---------------------------------------------------"
Write-Host "¡Despliegue Completo!"
Write-Host "Frontend: $FRONTEND_URL"
Write-Host "Backend:  $BACKEND_URL"
Write-Host "---------------------------------------------------"
Write-Host "NOTA: Asegúrate de crear tu base de datos en Cloud SQL y actualizar la variable DATABASE_URL en el servicio Backend si no lo hiciste ahora."
