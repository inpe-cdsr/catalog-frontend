import { EnvironmentBaseClass } from 'src/environments/environments_base';

/**
 * Selected Variables for development environment
 */
export class Environment extends EnvironmentBaseClass {
  /** development environment */
  production = false;
  urlGeoServer = 'http://cbers1.dpi.inpe.br:9080/geoserver';
  urlViaCEP = 'http://viacep.com.br/ws';
  // urlStacCompose = 'http://localhost:5000/stac_compose'
  // urlStacCompose = 'http://datacube-001.dpi.inpe.br:5026/stac_compose'
  urlStacCompose = 'http://brazildatacube.dpi.inpe.br/stac-compose';
}
