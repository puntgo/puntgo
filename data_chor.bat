start node -p require('./server/batch/DeliveryVolumeBatch').refreshVolumeDataFromNB();
start node -p require('./server/batch/DeliveryVolumeBatch').refreshWorldIndicesDataFromNB();
node -p require('./server/batch/PreResultEstimatesBatch').fetchPreResultFromMC(); >> log.txt

