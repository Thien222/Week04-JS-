import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

const ProductReviewScreen = () => {
  const [rating, setRating] = useState(5);  
  const [comment, setComment] = useState('');

 
  const handleRatingPress = (index) => {
    setRating(index + 1); 
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.productContainer}>
        <Image
          style={styles.productImage}
          source={require('../assets/usb.png')}
        />
        <Text style={styles.productTitle}>
          USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa bluetooth
        </Text>
      </View>

      {/* Xếp hạng sao */}
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>Cực kỳ hài lòng</Text>
        <View style={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <TouchableOpacity key={i} onPress={() => handleRatingPress(i)}>
              <Text style={i < rating ? styles.starFilled : styles.starEmpty}>
                ★
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

     
      <TouchableOpacity style={styles.imageButton}>
        <Text style={styles.imageButtonText}>Thêm hình ảnh</Text>
        <Image
          style={styles.productImage}
          source={require('../assets/Vector.png')}
        />
      </TouchableOpacity>

      
      <TextInput
        style={styles.commentInput}
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        value={comment}
        onChangeText={setComment}
        multiline
      />

      
      <Button title="Gửi" onPress={() => console.log('Gửi bình luận với số sao:', rating)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  productTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginBottom: 20,
    alignItems: 'center', 
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', 
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  starFilled: {
    fontSize: 30,
    color: 'gold',
  },
  starEmpty: {
    fontSize: 30,
    color: '#ddd',
  },
  imageButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    fontSize: 16,
    color: '#000',
  },
  commentInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    height: 100,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});

export default ProductReviewScreen;
