# frozen_string_literal: true

source "https://rubygems.org"

gemspec

group :test do
  gem "html-proofer", "~> 3.18"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Lock jekyll-sass-converter to 2.x on Linux-musl
if RUBY_PLATFORM =~ /linux-musl/
  gem "jekyll-sass-converter", "~> 2.0"
end




# Jekyll as a dependency
# gem "jekyll"
# gem "liquid-c"

# Extended features
# gem 'jekyll-seo-tag'  
# gem 'jekyll-target-blank'
# gem 'jekyll-gist'
# gem 'jemoji'
gem 'thor'
gem 'stringex'
# gem 'jekyll-loading-lazy'

# gem 'jekyll-compose', group: [:jekyll_plugins]
# gem 'jekyll-feed'
# gem 'jekyll-sitemap'
# gem 'jekyll-paginate'
# gem 'jekyll_picture_tag', '~> 2.0'

# gem 'jekyll-compress-images'  # not need as 'Imgbot' installed in the repo
# gem 'amp-jekyll', '~> 1.0', '>= 1.0.2'
# gem 'jekyll-include-cache'
# gem 'jekyll-gzip'

