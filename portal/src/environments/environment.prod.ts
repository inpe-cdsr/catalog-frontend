import { EnvironmentBaseClass } from 'src/environments/environments_base';

/**
 * Selected variables for production environment
 */
export class Environment extends EnvironmentBaseClass {
  /** production environment */
  production = true;
  geoServers = [];
  urlStacCompose = '';
}
