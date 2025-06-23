import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Button, Gap} from '../../components/atoms';
import {Header} from '../../components/molecules';

// Gambar
import PromoImage from '../../assets/promo.png';
import Bell from '../../assets/bell.png';
import Chicken from '../../assets/chicken.png';
import Drink from '../../assets/drink.png';
import Fruit from '../../assets/fruit.png';
import FriedChicken from '../../assets/fried-chicken.png';
import Samosa from '../../assets/samosa.png';
import Grape from '../../assets/grape.png';
import CocaCola from '../../assets/coca-cola.png';
import Shawarma from '../../assets/shawarma.png';
import Biryani from '../../assets/biryani.png';
import HomeIcon from '../../assets/home.png';
import Shopping from '../../assets/shopping.png';
import Cart from '../../assets/cart.png';
import Profile from '../../assets/profile.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Bell di atas */}
        <View style={styles.bellContainer}>
          <TouchableOpacity>
            <Image source={Bell} style={styles.iconSmall} />
          </TouchableOpacity>
        </View>

        {/* Promo Section */}
        <View style={styles.promoContainer}>
          <Image source={PromoImage} style={styles.promoImage} />
        </View>

        {/* Search Bar */}
        <TextInput placeholder="Find your food..." style={styles.searchInput} />

        {/* Top Menu */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Menu</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all.....</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topMenu}>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={Chicken} style={styles.menuIcon} />
            <Text style={styles.menuText}>Chicken</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={Drink} style={styles.menuIcon} />
            <Text style={styles.menuText}>Drinks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={Fruit} style={styles.menuIcon} />
            <Text style={styles.menuText}>Fruits</Text>
          </TouchableOpacity>
        </View>

        {/* Rekomendasi */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended For You</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all.....</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <ItemCard
            image={FriedChicken}
            name="Fried Chicken"
            price="Rp.15.000"
          />
          <ItemCard image={Samosa} name="Samosa" price="Rp.15.000" />
          <ItemCard image={Grape} name="Grape" price="Rp.10.000" />
          <ItemCard image={CocaCola} name="CocaCola" price="Rp.4.000" />
          <ItemCard image={Shawarma} name="Shawarma" price="Rp.10.000" />
          <ItemCard image={Biryani} name="Biryani" price="Rp.12.000" />
        </View>

        <Gap height={20} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <Image source={HomeIcon} style={styles.navIcon} />
        <Image source={Shopping} style={styles.navIcon} />
        <Image source={Cart} style={styles.navIcon} />
        <View style={styles.profileContainer}>
          <Image source={Profile} style={styles.navIcon} />
          <Text style={styles.profileText}>Julio Malinso</Text>
        </View>
      </View>
    </View>
  );
};

const ItemCard = ({image, name, price}) => (
  <View style={styles.card}>
    <Image source={image} style={styles.foodImage} />
    <Text style={styles.foodName}>{name}</Text>
    <Text style={styles.foodPrice}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
    padding: 16,
  },
  bellContainer: {
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  iconSmall: {
    width: 24,
    height: 24,
  },
  promoContainer: {
    marginBottom: 16,
  },
  promoImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#020202',
  },
  viewAll: {
    fontSize: 12,
    color: '#000',
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  menuButton: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 48,
    height: 48,
    marginBottom: 4,
  },
  menuText: {
    fontSize: 12,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 16,
  },
  foodImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginBottom: 4,
  },
  foodName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#020202',
  },
  foodPrice: {
    fontSize: 12,
    color: '#8D92A3',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#000',
    paddingVertical: 12,
  },
  navIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileText: {
    fontSize: 10,
    color: '#fff',
    marginTop: 4,
  },
});

export default Home;
