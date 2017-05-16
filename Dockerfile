FROM centos:7
MAINTAINER 'Mike Williams'

ENV NODE_ENV Development 
WORKDIR /root

RUN yum -y update && yum -y groupinstall "Development tools" 
ADD ImageMagick-6.9.1-10.tar.gz .

WORKDIR /root/ImageMagick-6.9.1-10
RUN ./configure --with-jpeg=yes --with-png=yes && make && make install

WORKDIR /root
ADD demo/ .

RUN yum -y install epel-release
RUN yum -y install npm nodejs

RUN npm install
RUN /root/node_modules/@angular/cli/bin/ng build

EXPOSE 3000
ENTRYPOINT ["/bin/bash"]
