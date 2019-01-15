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
                "showId" integer NOT NULL,
                "userId" integer NOT NULL,
                "seen" boolean NOT NULL,
                "opinion" character varying NOT NULL,
                CONSTRAINT "PK_5ec733c275c9b9322cde468b4c1"
                PRIMARY KEY ("id")
            );
            CREATE UNIQUE INDEX "IDX_1cbe6482e9d35cc3331f0080ad" ON "opinion" ("showId", "userId") ;

            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "username" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            );

            CREATE TABLE "group" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "adminId" integer NOT NULL,
                "key" uuid NOT NULL,
                "sharable" boolean NOT NULL,
                CONSTRAINT "UQ_b2177905daa1bf150e743072d38" UNIQUE ("key"),
                CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id")
            );

            CREATE TABLE "group_members_user" (
                "groupId" integer NOT NULL,
                "userId" integer NOT NULL,
                CONSTRAINT "PK_7170c9a27e7b823d391d9e11f2e" PRIMARY KEY ("groupId", "userId")
            );

            ALTER TABLE "opinion" ADD CONSTRAINT "FK_6b0dbbfa9898958ea5199275663" FOREIGN KEY ("showId") REFERENCES "show"("id");
            ALTER TABLE "opinion" ADD CONSTRAINT "FK_01013f2e4aa674108b2d97680ff" FOREIGN KEY ("userId") REFERENCES "user"("id");
            ALTER TABLE "group" ADD CONSTRAINT "FK_30893a67ca8c8f5e709b5bd5720" FOREIGN KEY ("adminId") REFERENCES "user"("id");
            ALTER TABLE "group_members_user" ADD CONSTRAINT "FK_bfa303089d367a2e3c02b002b8f" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE CASCADE;
            ALTER TABLE "group_members_user" ADD CONSTRAINT "FK_427107c650638bcb2f1e167d2e5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE;
        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
