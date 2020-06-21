//import { Express } from 'Express';
import mariadb from 'mariadb';
import util from 'util';
// DTOs :
import { IDatabaseConfig } from './IDatabaseConfig';

export class DatabaseConfig {
    // Private :
    private host: string;
    private port: number;
    private user: string;
    private password: string;
    private database: string;

    private con: any;
    public query: any;


    private constructor(user: string, password: string, database: string, host: string = 'localhost', port: number = 3306) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.database = database;
        this.con = mariadb.createPool({
            host: this.host,
            port: this.port,
            user: this.user,
            password: this.password,
            database: this.database,
            connectionLimit: 5, /** @Todo : Is it useful ? **/
        });
        this.query = util.promisify(this.con.query).bind(this.con)
    }

    public static getConfig(): IDatabaseConfig {
        return {
            host: DatabaseConfig.instance.host,
            port: DatabaseConfig.instance.port,
            user: DatabaseConfig.instance.user,
            password: DatabaseConfig.instance.password,
            database: DatabaseConfig.instance.database,
        };
    }

    public static instance: DatabaseConfig;

    public static setConfig(user: string, password: string, database: string, host: string = 'localhost', port: number = 3306): void {
        DatabaseConfig.instance = new DatabaseConfig(user, password, database, host, port);
    }

    public static setIConfig(config: IDatabaseConfig): void {
        DatabaseConfig.instance = new DatabaseConfig(
            config.user,
            config.password,
            config.database,
            config.host,
            config.port
        );
        /*DatabaseConfig.instance.host = config.host;
        DatabaseConfig.instance.port = config.port;
        DatabaseConfig.instance.user = config.user;
        DatabaseConfig.instance.password = config.password;
        DatabaseConfig.instance.database = config.database;*/
    }


}
