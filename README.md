# redlock-k8s-laboratory
Probando redlock como semáforo para cronjobs configurados en software

## Descripción
Este repositorio es un laboratorio para probar la ejecución de cronjobs configurados
dentro de un proyecto nodejs, pero permitiendo que éste sistema esté distribuido en kubernetes
y no por ello el cronjob se paralelice y de pie a errores de funcionamiento no deseados.

### Procedimiento
- Ejecutar el comando `minikube-commands/build-into-registry.sh`
  - En la terminal en uso carga al registry local de minikube las imágenes que se construyan
- Construir las imágenes, por docker build o por docker-compose
- Levantar los 3 deployments con kubectl
  - Redis
  - Web server
  - Cron service  

**Tips:**  
Cron service levanta 5 instancias con el cron corriendo en su software,
con un sleep de 900ms. Esto permite ver cómo en el log del web server van
entrando peticiones con casi un segundo de retraso y sin solapes,
comprobando así que redlock está haciendo la función de semáforo correctamente. 

### Servicios
- Servidor web central que muestra las llamadas que recibe, para revisión humana
- Redis que actuará de mutex
- Varios pod que tendrán un cron y cada minuto llamarán al servidor web central
  - El servidor web debería mostrar que recibe una única petición por minuto

#### Paquetería usada
- [Express](https://www.npmjs.com/package/express)
- [Redlock npm](https://www.npmjs.com/package/redlock)
- [Cronjob npm](https://www.npmjs.com/package/cron)

#### Documentación
- [Redis](https://redis.io/)
- [Kubernetes](https://kubernetes.io/)
  - [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Nodejs](https://nodejs.org/en/)
