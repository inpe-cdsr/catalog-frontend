
/**
 * Selected variables for production environment
 */
export class Environment {
  /** production environment */
  production = false;
  urlGeoServer = 'http://cbers1.dpi.inpe.br:9080/geoserver';
  urlViaCEP = 'http://viacep.com.br/ws';
  urlStacCompose = 'http://brazildatacube.dpi.inpe.br/stac-compose';
  urlDGIBack = 'http://localhost:5000/catalog';
}
