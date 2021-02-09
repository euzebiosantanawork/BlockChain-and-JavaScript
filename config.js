//Do not chage these configurations after the blockchain is initialized
module.exports={
    //INFO: The mining rewar could decreases over time like bitcoin 
// see  https://en.bitcoin.it/wiki/Mining#Reward.
    MINING_REWARD:5000000000,
//Info: Usually it's fee over  transaction size(not qunatity)
    FEE_PER_TRANSACTION: 1,
//INFO: Usually the limit is determined by block size (not quantity)
    TRANSACTIONS_PER_BLOck: 2,

        genesisBlock {
            index:0,
            previousHash: '0',
            timestamp: 1465154705,
            nonce: 0,
            transaction [

                {

                    id: '63ec3ac02f822450039df13ddf7c3c0f19bab4acd4dc928c62fcd78d5ebc6dba',
                    hash: null,
                    type: 'regular',
                    data: {

                        inputs: [],
                        outputs: []

                    }

                }

            ]
        },

        pow: {

            getDifficulty: (blocks,index)=>{
                //Proof-of-work difficulty settings
                const BASE_DiFFiculty = Number.MAX_SAFE_INTEGER;
                const EVERY_X_BLOCKS= 5;
                const POW_CURVE = 5;
                //INFO: The difficulty is the formula that naivecoin choose to check the proof a work, this number is later converted to base 16 to represent the minimal intinal hash expected value.
                //INFO: This colud be a formular based on time. Eg.: Check how long it took to mine X blocks over a period of time and then decrease/increase the difficulty base on that See  https://en.bitcoin.it/wiki/Difficulty
            return Math.max(
                Math.floor(
                    BASE_DIFFICULTY / Math.pow(
                        Math.floor(((index || blocks.length) + 1) / EVERY_X_BLOCKS) + 1
                        , POW_CURVE)
                )
                , 0);
        }
    }
};



