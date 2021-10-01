
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';

const json_data = {
    "user_id":1,
    "stamina":100,
    "stamina_updated_at":"2021-09-30T17:51:24.000Z",
};

const HomePage = () => {
    const [current_stamina, setCurrentStamina] = useState(0);
    const [update_stamina_in, setUpdateStaminaIn] = useState(0);

    const user_signed_in = true;
    const current_user = {
        "name": "うさうさ",
        "email": "usausa@sample.co.jp",
    }
    const current_user_identity = json_data;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStamina(current_user_identity.stamina + Math.floor((Date.now() - Date.parse(current_user_identity.stamina_updated_at))/10000));
            setUpdateStaminaIn(Math.floor((Date.now() - Date.parse(current_user_identity.stamina_updated_at))/1000)%10);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
  
    return (<>
        <h1>うさぎファンタジア</h1>
        <p className="notice">{"交換しました。"}</p>
        <p className="alart">{"交換できませんでした。"}</p>
        {"| (開発中のため、ユーザーデータを予告無く削除する場合があります。)"}
        <br/>
        {user_signed_in && <>
            name: {current_user.name}<br/>
            email: {current_user.email}<br/>
            stamina: {current_stamina} (更新まで {update_stamina_in} 秒)<br/>
        </>}
        <hr/>
    </>);
};

export default hot(module)(HomePage);

