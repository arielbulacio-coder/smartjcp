# Smart JCP - Plataforma Educativa

## José C. Paz - Intendente Mario Alberto Ishi

Este proyecto contiene el Frontend y Backend para la plataforma educativa "Ciudad del Aprendizaje".
Creado siguiendo el ejemplo del workspace `leydeohm`, utilizando React (Vite) y Node.js.

## Estructura

- `frontend/`: Aplicación React creada con Vite.
- `backend/`: API REST con Node.js y Express.

## Ejecución Local

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm start
```

## Despliegue en Google Cloud

Este proyecto está configurado para desplegarse en **Google App Engine**.
Asegúrate de tener instalada la CLI de `gcloud` e iniciada sesión con tus credenciales.

1.  **Backend**:
    ```bash
    cd backend
    gcloud app deploy
    ```

2.  **Frontend**:
    Primero construye la aplicación:
    ```bash
    cd frontend
    npm run build
    ```
    Luego despliega:
    ```bash
    gcloud app deploy
    ```

Nota: Es posible que necesites configurar `dispatch.yaml` si quieres alojar ambos servicios en el mismo dominio o configurar servicios separados en App Engine.
