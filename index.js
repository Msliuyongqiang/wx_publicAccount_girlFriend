const { params } = require('./config');
const { getToken } = require('./getToken');
const { sendMessage } = require('./sendMessage');
const { getDate, getWeather, getLoveDays, getValueByMonth,getLoveWords} = require('./utils');


const start = async () => {
    let access_token = await getToken(params);
    let { wea, low, high } = await getWeather(params);
    let menstr = getValueByMonth();
    let loveDays = getLoveDays();
    let LoveWords= await getLoveWords();


    const data = {
        today: { value: getDate() },
        city: { value: '郑州市-二七区' },
        wea: { value: wea },
        low: { value: low },
        high: { value: high },
        menstr: { value: menstr },
        LoveWords: { value: LoveWords },
        days: { value: loveDays },
        // fight: {value: '开心消消乐 + 王者荣耀 => 加加油'},
    }

    console.log(data);
    // exit();
    console.log(access_token, params,data);
    for (let i = 0; i < params.users.length; i++) {
        params.touser=params.users[i];
        sendMessage({
            access_token,
            ...params,
            data
        })
            .then(res => {
                if (res.data && res.data.errcode) {
                    console.log('发送失败', res.data);
                    return;
                }
                console.log('发送成功 - 请在微信上查看对应消息')
            })
            .catch(err => {
                console.log('发送失败', err);
            })
    }
    
   
}

start();