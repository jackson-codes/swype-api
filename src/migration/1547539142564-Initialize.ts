import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1547539142564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "show" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_e9993c2777c1d0907e845fce4d1"
                PRIMARY KEY ("id")
            );
            
            CREATE TABLE "opinion" (
                "id" SERIAL NOT NULL,
                "seen" boolean NOT NULL,
                "opinion" character varying NOT NULL,
                "showId" integer,
                "userId" integer,
                CONSTRAINT "PK_5ec733c275c9b9322cde468b4c1"
                PRIMARY KEY ("id")
            );
            CREATE UNIQUE INDEX "IDX_1cbe6482e9d35cc3331f0080ad" ON "opinion" ("showId", "userId");

            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "username" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760"
                PRIMARY KEY ("id")
            );

            CREATE TABLE "group" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "key" uuid NOT NULL UNIQUE,
                "sharable" boolean NOT NULL,
                "adminId" integer,
                CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b"
                PRIMARY KEY ("id")
            );
            
            ALTER TABLE "opinion" ADD CONSTRAINT "FK_6b0dbbfa9898958ea5199275663" FOREIGN KEY ("showId") REFERENCES "show"("id");
            ALTER TABLE "opinion" ADD CONSTRAINT "FK_01013f2e4aa674108b2d97680ff" FOREIGN KEY ("userId") REFERENCES "user"("id");
            ALTER TABLE "group" ADD CONSTRAINT "FK_30893a67ca8c8f5e709b5bd5720" FOREIGN KEY ("adminId") REFERENCES "user"("id");
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
