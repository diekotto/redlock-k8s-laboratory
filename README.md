# redlock-k8s-laboratory
Probando redlock como semáforo para cronjobs configurados en software

## Descripción
Este repositorio es un laboratorio para probar la ejecución de cronjobs configurados
dentro de un proyecto nodejs, pero permitiendo que éste sistema esté distribuido en kubernetes
y no por ello el cronjob se paralelice y de pie a errores de funcionamiento no deseados.

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
