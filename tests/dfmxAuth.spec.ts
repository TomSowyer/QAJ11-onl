import superagent from "superagent";
import { devUrl } from "../const/consts";
import { faker } from "@faker-js/faker";

let accessToken: string;

describe('Request code', () => {
    it('Dictionary check', async () => {
        let requestCode: any;
        try {
            requestCode = await superagent.get(`${devUrl}/api/v1/dictionary/countries`)
        }
        catch (err: any) {
            console.log(err.message)
        }
        expect(requestCode.status).toBe(200);
        expect(requestCode.body.data[0]).toHaveProperty('id', 74);
        expect(requestCode.body.data[0]).toHaveProperty('value', 'Albania');
        expect(requestCode.body.data[0]).toHaveProperty('iso3Code', 'ALB');
        expect(requestCode.body.data[0]).toHaveProperty('phoneCode', '355');
        expect(requestCode.body.data).toHaveLength(93)
    });
    it('Code Request check', async () => {
        const phoneNumb = (375257169225);
        const randomPhone = faker.number.int({min: 1000 , max: 9999});
        console.log(randomPhone);
        let requestCode: any;
        try {
            requestCode = await superagent
                .post(`${devUrl}/api/v1/auth/phone-confirmation/request-code`)
                .set('Content-Type', 'application/json')
                .send({
                    "phone": `+37533300${randomPhone}`,
                    "scope": "REGISTRATION",
                    "countryId": 74
                });
            console.log(requestCode.body)
        }
        catch (err: any) {
            console.log(err.message);
        }
        expect(requestCode.status).toBe(201);
        expect(requestCode.body).toHaveProperty('resendAttemptsLeft', 5);
        expect(requestCode.body).toHaveProperty('verifyAttemptsLeft', 3);
    });
    it('Login check', async () => {
        let requestCode: any;
        try {
            requestCode = await superagent
                .post(`${devUrl}/api/v1/auth/login`)
                .set('Content-Type', 'application/json')
                .send({
                    phone: "+375257865367",
                    password: "DanyDany@42198"
                });
            accessToken = (requestCode.body.accessToken)
            console.log(requestCode.body)
        }
        catch (err: any) {
            console.log(err.message);
        }
        expect(requestCode.statusCode).toBe(201);
        expect(requestCode.body).toHaveProperty('accessToken');
        expect(requestCode.body).toHaveProperty('refreshToken');
    });
    it('Setting check', async () => {
        let requestCode: any;
        try {
            requestCode = await superagent
                .patch(`${devUrl}/api/v1/users/settings`)
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwic3ViIjoiOWRhNDdjOWYtMjI0OC00M2EzLTk2YmItMGZkMzZkMzVkYzRhIiwiaXNLeWNQYXNzZWQiOnRydWUsImlhdCI6MTcyMDcwMzc0OSwiZXhwIjoxNzIzMjk1NzQ5LCJhdWQiOiJjZi1ndy1iYWNrZW5kLWVrcy5kZm14LmRldiJ9.m0FwPSK9k6hpKst4jTBmn90yeVPsDtrJ6i62UBgSGJ8')
                .set('Content-Type', 'application/json')
                //.set('Host','cf-gw-backend-eks-reap.dfmx.dev')
                .send({
                    "languageId": 2
                });
            console.log(requestCode.body)
        }
        catch (err: any) {
            console.log(err.message);
        }
        expect(requestCode.status).toBe(200);
        expect(requestCode.body).toHaveProperty('shareWithContacts', false);
        expect(requestCode.body).toHaveProperty('makeMeDiscoverable', true);
        expect(requestCode.body).toHaveProperty('showBankBalance', true);
        expect(requestCode.body).toHaveProperty('showWalletBalance', true);
        expect(requestCode.body).toHaveProperty('chosenCurrency');
        expect(requestCode.body).toHaveProperty('favoriteAccounts');
        expect(requestCode.body).toHaveProperty('language', 'Russian');
        expect(requestCode.body).toHaveProperty('country');
        expect(requestCode.body).toHaveProperty('smsNotifications', false);
        expect(requestCode.body).toHaveProperty('pushNotifications', true);
        expect(requestCode.body).toHaveProperty('emailNotifications', true);
    });
    it('Pin change check', async () => {
        let requestCode: any;
        try {
            requestCode = await superagent
                .put(`${devUrl}/api/v2/cards/176/pin`)
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwic3ViIjoiOWRhNDdjOWYtMjI0OC00M2EzLTk2YmItMGZkMzZkMzVkYzRhIiwiaXNLeWNQYXNzZWQiOnRydWUsImlhdCI6MTcyMDcwMzc0OSwiZXhwIjoxNzIzMjk1NzQ5LCJhdWQiOiJjZi1ndy1iYWNrZW5kLWVrcy5kZm14LmRldiJ9.m0FwPSK9k6hpKst4jTBmn90yeVPsDtrJ6i62UBgSGJ8')
                .set('Content-Type', 'application/json')
                //.set('Host','cf-gw-backend-eks-reap.dfmx.dev')
                .send({
                    "pin": "0123"
                  });
            console.log(requestCode.body)
        }
        catch (err: any) {
            console.log(err.message);
        }
        expect(requestCode.status).toBe(200);
        expect(requestCode.body).toHaveProperty('newPin', '0123');
    });
})