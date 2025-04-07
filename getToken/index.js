const fs = require('fs');
const path = require('path');
const axios = require('axios');
const moment = require('moment');

const getToken = (params) => {
    return new Promise((resolve, reject) => {
        const tokenFile = path.join(__dirname, 'token.json');
        fs.readFile(tokenFile, 'utf-8', function (err, data) {
            console.log(err,data);
            
            if (err) {
                reject(err);
            } else {
                if (data) {
                    const token = JSON.parse(data);
                    console.log(moment().unix(),'moment().unix()');
                    
                    if (token.expires_in > moment().unix()) {
                        console.log('进入到了token.expires_in > moment().unix()');
                        // resolve(token.access_token);
                        // return;
                    }
                }
            }  

            const appid = params.appid;
            const secret = params.secret;
            console.log(appid,secret,'获取的appid和secret');
            

            // axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`)
            axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx95c0acae466ab8a8&secret=72f0824f30c85c3f3ad91a3c55c8a9ab`)
                .then(res => {
                    console.log('%c获取的token','color:red',res.data,'获取的token',moment().unix());
                    if (res.data && res.data.errcode) {
                        reject(data);
                        return;
                    }
                    resolve(res.data.access_token);
                    const t = res.data;
                    t.expires_in = t.expires_in + moment().unix() - 1200;
                    fs.writeFile(tokenFile, JSON.stringify(t), function (err) {
                        if (err) {
                            reject(err);
                        }
                    })
                }).catch(err => {    
                    console.log('%c获取的token错误ccccccccccc',err);
                })
        })
    })
};

module.exports = {
    getToken
}