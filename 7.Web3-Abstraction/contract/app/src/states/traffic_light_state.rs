// necesary cretes
use sails_rs::{
    prelude::*,
    collections::HashMap,
    // cell::Ref
};

// Create a struct for the state
#[derive(Clone, Default)]
pub struct TrafficLightState {
    pub current_light: String,
    pub all_users: HashMap<ActorId, String>,
    pub name:  String,
    pub age: u8,
    pub country: String,
    pub luggage: Vec<String>,
    pub date_flight: String,
    pub lugagge_value: String
}

// Create a struct that can be send to the user who reads state
#[derive(Encode, Decode, TypeInfo)]
#[codec(crate = sails_rs::scale_codec)]
#[scale_info(crate = sails_rs::scale_info)]
pub struct IoTrafficLightState {
    pub current_light: String,
    pub all_users: Vec<(ActorId, String)>,
    pub name:  String,
    pub age: u8,
    pub country: String,
    pub luggage: Vec<String>,
    pub date_flight: String,
    pub lugagge_value: String
}

// Implementation of the From trait for converting CustomStruct to IoCustomStruct
impl From<TrafficLightState> for IoTrafficLightState {

    // Conversion method
    fn from(value: TrafficLightState) -> Self {
        // Destructure the CustomStruct object into its individual fields
        let TrafficLightState {
            current_light,
            all_users,
            name,
            age,
            country,
            luggage,
            date_flight,
            lugagge_value

        } = value;

        // Perform some transformation on second field, cloning its elements (Warning: Just for HashMaps!!)
        let all_users = all_users
            .iter()
            .map(|(k, v)| (*k, v.clone()))
            .collect();

        let name = "John".to_string();
        

        let age = 30;

        let country = "Mexico".to_string();
        let luggage = vec!["Luggage1".to_string(), "Luggage2".to_string()];
        let date_flight = "2024-01-01".to_string();
        let lugagge_value = "1000".to_string();


   
        // Create a new IoCustomStruct object using the destructured fields
        Self {
            current_light,
            all_users,
            name,
            age,
            country,
            luggage,
            date_flight,
            lugagge_value

        }
    }
}