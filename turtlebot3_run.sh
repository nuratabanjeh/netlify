#ros-rosbridge
#Terminal 1:
roslaunch rosbridge_server rosbridge_websocket.launch &
sleep 3

#turtlebot3
#Terminal 2:
export TURTLEBOT3_MODEL=burger
#roslaunch turtlebot3_bringup turtlebot3_robot.launch
roslaunch turtlebot3_gazebo turtlebot3_world.launch &
sleep 5
#Terminal 3:
# copy (map.yaml, map.pgm) from: /opt/ros/noetic/share/turtlebot3_navigation/maps to: $HOME/
cp /opt/ros/noetic/share/turtlebot3_navigation/maps/map.* $HOME

export TURTLEBOT3_MODEL=burger
roslaunch turtlebot3_navigation turtlebot3_navigation.launch map_file:=$HOME/map.yaml #open_rviz:=0

