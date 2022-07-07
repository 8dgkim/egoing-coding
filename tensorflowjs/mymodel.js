var tf = require('@tensorflow/tfjs');



// 1. 과거의 데이터를 준비합니다. 
var 온도 = [20, 21, 22, 23];
var 판매량 = [40, 42, 44, 46];
var 원인 = tf.tensor(온도);
var 결과 = tf.tensor(판매량);

// 2. 모델의 모양을 만듭니다. 
var X = tf.input({ shape: [1] });
var Y = tf.layers.dense({ units: 1 }).apply(X);
var model = tf.model({ inputs: X, outputs: Y });
var compileParam = { optimizer: tf.train.adam(), loss: tf.losses.meanSquaredError }
model.compile(compileParam);

// 3. 데이터로 모델을 학습시킵니다. 
// var fitParam = { epochs: 2000 } 
var fitParam = { 
    epochs: 1000,
    callbacks:{
        onEpochEnd:
            function(epoch, logs) {
                console.log('epoch', epoch, logs, 'RMSE => ', Math.sqrt(logs.loss));
            }
        }
    } // loss 추가 예제
    model.fit(원인, 결과, fitParam).then(function (result) { 
        // 4. 모델을 이용합니다. 
        // 4.1 기존의 데이터를 이용
        var 예측한결과 = model.predict(원인);
        예측한결과.print();
        model.save('file://./lemon');
    }
);  

// 4.2 새로운 데이터를 이용
var 다음주온도 = [15, 16, 17, 18, 19]
var 다음주원인 = tf.tensor(다음주온도);
var 다음주결과 = model.predict(다음주원인);
다음주결과.print();


// 
// model.predict(tf.tensor([20])).print();
// model.predict(tf.tensor([20])).arraySync();
// model.predict(tf.tensor([20])).arraySync() [0] [0];

// var weights = model.getWeights();
// var weight = weights[0].arraySync() [0] [0];
// var bias = weights[1].arraySync() [0];

// console.log(weight * 20 + bias);


