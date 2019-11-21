import { EnvironmentBaseClass } from 'src/environments/environments_base';

/**
 * Selected Variables for development environment
 */
export class Environment extends EnvironmentBaseClass {
  /** development environment */
  production = false;
  urlGeoServer = 'http://cbers1.dpi.inpe.br:9080/geoserver';
  urlViaCEP = 'http://viacep.com.br/ws';
  urlStacCompose = 'http://brazildatacube.dpi.inpe.br/stac-compose';
  urlDGIBack = 'http://localhost:5000/catalog';
}
