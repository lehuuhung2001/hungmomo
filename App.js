import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity,Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import MomoBanner from './assets/Momo.png'




export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="light" />
      <View style={styles.box1}>
        <Text style={styles.text1}>Xin chào!</Text>
        <Text style={styles.text2}>LE HUU HUNG</Text>
        <Text style={styles.text2}>0989764435</Text>
      </View>
      <View style ={styles.box2}>
      <FontAwesome name="lock" size={24} color="black" style = {{position: 'absolute', left: 40, top: 48,zIndex: 1}}
      />
        <TextInput style = {styles.frame1}
                  keyboardType={'numeric'}
                  secureTextEntry={true}
                  // autoFocus={true}
                  placeholder= ' Nhập mật khẩu'
                  placeholderTextColor={'#929292'}
                  
        ></TextInput>
        
        <TouchableOpacity style={styles.frame2}>
            <Text style = {{color: 'white'}}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <View style = {styles.box3}>
        <TouchableOpacity style={styles.frame3}>
            <Text style={styles.text2}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frame3}>
            <Text style={styles.text2}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>
        </View><Image source = {MomoBanner} style = {{width:'100%', height: null,aspectRatio:770/370}}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bb006a',
    
    
  },
  box1: {
    flex: 2,
    backgroundColor: '#bb006a',
    justifyContent: 'flex-end',
  
    
  },
  box2:{
    flex: 6,
    backgroundColor: '#bb006a',
    
    
  },
  text1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 60,
    
  },
  text2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25
  },
  frame1:{
    backgroundColor: 'white',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 35,
    width: '85%',
    marginLeft: 30,
    textAlign :'center'
  },
  frame2:{
    backgroundColor: '#960058',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginTop: 15,
    width: '85%',
    marginLeft: 30,
  },
  frame3:{
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginTop: 35,
    paddingHorizontal: 25
    
  },
  box3: {
    flexDirection: 'row',
  }
  
});
