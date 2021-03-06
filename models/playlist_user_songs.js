//Use the sequelize constructor to design a model for each new playlist and create SQL data 
module.exports = function(sequelize, DataTypes) {

    var Playlist_user_songs = sequelize.define("Playlist_user_songs", {
        playlist_user_songs_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        playlist_id: {
            type: DataTypes.BIGINT
        },
        user_id: {
            type: DataTypes.BIGINT
        },
        song_id: {
            type: DataTypes.BIGINT
        },
        createdAt: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
    });
  
    return Playlist_user_songs;
  };

  //TODO Test
//   Users.hasMany(Playlist_user_songs, { onDelete: 'SET NULL', onUpdate: 'CASCADE'});
//   Songs.hasMany(Playlist_user_songs, { onDelete: 'SET NULL', onUpdate: 'CASCADE'});
